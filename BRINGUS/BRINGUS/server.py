# run_server.py
# Save this file inside the project folder:
# c:\Users\21678\OneDrive - gvgs.vic.edu.au\Documents\2026\Term 1\Web Dev\BRINGUS

from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os

PORT = 8000

# Use the script's folder as serving directory, regardless of where IDLE opened
root = Path(__file__).resolve().parent
os.chdir(root)

server = HTTPServer(("0.0.0.0", PORT), SimpleHTTPRequestHandler)
print(f"Serving {root} at http://localhost:{PORT}")
try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nServer interrupted — shutting down...")
    server.server_close()
