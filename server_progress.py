#!/usr/bin/env python3
"""Quick static website host for sharing project progress."""

import argparse
import os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial

parser = argparse.ArgumentParser( )
parser.add_argument("--directory", default=".", help="Folder containing index.html")
parser.add_argument("--port", type=int, default=8000)
args = parser.parse_args()

folder = os.path.abspath(args.directory)
handler = partial(SimpleHTTPRequestHandler, directory=folder)
server = ThreadingHTTPServer(("0.0.0.0", args.port), handler)

print(f"Serving: {folder}")
print(f"On your laptop: http://localhost:{args.port}" )
print("Stop with Ctrl+C")

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
finally:
    server.server_close()
