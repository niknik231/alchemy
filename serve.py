#!/usr/bin/env python3
"""Simple HTTP server for testing the Alchemy game locally."""
import http.server
import socketserver
import os
import webbrowser

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}/"
    print(f"🧪 Alchemy Game Server")
    print(f"📂 Serving from: {DIRECTORY}")
    print(f"🌐 Open: {url}")
    print("Press Ctrl+C to stop")
    webbrowser.open(url)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
