import json
import time
import subprocess
import urllib.request
import urllib.parse

def device_flow_auth():
    """Authenticate with GitHub using device flow."""
    client_id = "de86a8fd27c6ee46aa7e"  # GitHub CLI OAuth app ID (public)
    
    # Step 1: Request device code
    req = urllib.request.Request(
        "https://github.com/login/device/code",
        data=urllib.parse.urlencode({
            "client_id": client_id,
            "scope": "repo"
        }).encode(),
        headers={"Accept": "application/json"}
    )
    
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
    
    device_code = data["device_code"]
    user_code = data["user_code"]
    verification_uri = data["verification_uri"]
    expires_in = data["expires_in"]
    interval = data["interval"]
    
    print("=" * 60)
    print("GitHub Device Flow Authentication Required")
    print("=" * 60)
    print(f"\n1. Открой в браузере: {verification_uri}")
    print(f"2. Введи код: {user_code}")
    print(f"3. Нажми 'Authorize' и дождись подтверждения")
    print(f"\nКод действителен {expires_in // 60} минут")
    print("=" * 60)
    print("\nОжидаю авторизацию...")
    
    # Step 2: Poll for token
    start_time = time.time()
    while time.time() - start_time < expires_in:
        time.sleep(interval)
        
        req = urllib.request.Request(
            "https://github.com/login/oauth/access_token",
            data=urllib.parse.urlencode({
                "client_id": client_id,
                "device_code": device_code,
                "grant_type": "urn:ietf:params:oauth:grant-type:device_code"
            }).encode(),
            headers={"Accept": "application/json"}
        )
        
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode())
        
        if "access_token" in result:
            print("✅ Авторизация успешна!")
            return result["access_token"]
        
        if result.get("error") == "authorization_pending":
            continue
        elif result.get("error") == "slow_down":
            interval = result.get("interval", interval + 5)
        else:
            print(f"Ошибка: {result}")
            return None
    
    print("❌ Время ожидания истекло")
    return None

def create_repo(token, owner, repo_name):
    """Create a GitHub repository."""
    req = urllib.request.Request(
        "https://api.github.com/user/repos",
        data=json.dumps({
            "name": repo_name,
            "description": "Alchemy game - create new elements by combining",
            "private": False,
            "auto_init": False
        }).encode(),
        headers={
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        }
    )
    
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            print(f"✅ Репозиторий создан: {data['html_url']}")
            return data["clone_url"]
    except urllib.error.HTTPError as e:
        if e.code == 422:
            print("⚠️ Репозиторий уже существует")
            return f"https://github.com/{owner}/{repo_name}.git"
        else:
            print(f"❌ Ошибка создания репозитория: {e}")
            return None

def enable_pages(token, owner, repo_name):
    """Enable GitHub Pages."""
    req = urllib.request.Request(
        f"https://api.github.com/repos/{owner}/{repo_name}/pages",
        data=json.dumps({
            "source": {"branch": "main", "path": "/"}
        }).encode(),
        headers={
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        }
    )
    
    try:
        with urllib.request.urlopen(req) as resp:
            print("✅ GitHub Pages включены!")
            return True
    except urllib.error.HTTPError as e:
        # Pages might already be enabled or need different endpoint
        print(f"⚠️ Pages: {e.read().decode()}")
        return False

def main():
    print("🔧 Настройка публикации на GitHub...")
    
    # Authenticate
    token = device_flow_auth()
    if not token:
        print("❌ Не удалось авторизоваться")
        return
    
    # Create repo
    owner = "volovodova"
    repo_name = "alchemy-game"
    repo_url = create_repo(token, owner, repo_name)
    if not repo_url:
        return
    
    # Update remote and push
    subprocess.run(["git", "remote", "set-url", "origin", repo_url], check=True)
    subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
    print("✅ Код запушен!")
    
    # Enable Pages
    enable_pages(token, owner, repo_name)
    
    print(f"\n🌐 Сайт будет доступен через несколько минут:")
    print(f"   https://{owner}.github.io/{repo_name}/")

if __name__ == "__main__":
    main()
