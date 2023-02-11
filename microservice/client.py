#
#   Hello World client in Python
#   Connects REQ socket to tcp://localhost:5555
#   Sends "Hello" to server, expects "World" back
#

import zmq

"""
--------------------------------------------------------------------------
    Begin code citation:
    Author: Unknown
    Website: ZeroMQ
    Article Title: "Get started"
    URL: https://zeromq.org/get-started/?language=python&library=pyzmq#
    Copyright: The ZeroMQ Authors
    Date: 2022
--------------------------------------------------------------------------
"""

context = zmq.Context()

#  Socket to talk to server
print("\n", end="")
print("Connecting to hello world server…")
socket = context.socket(zmq.REQ)
socket.connect("tcp://localhost:2046")

# -----------------------------------------------------
# ******************* Send Requests *******************
# -----------------------------------------------------

filepath = "C:\\Users\\bradl\OneDrive - Oregon State University\\Classes\CS_361 Software Engineering I\\Project Folder\\microservice\data.csv"

# Send the request.
request = f"0|{filepath}"
print(f"Sending request: {request} …\n")
socket.send(bytes(request, "ascii"))

#  Get the reply.
message = socket.recv()
print(f"Received reply {request} [ {message} ]\n\n")

# -----------------------------------------------------

# Send the request.
request = f"2|{filepath}"
print(f"Sending request: {request} …\n")
socket.send(bytes(request, "ascii"))

#  Get the reply.
message = socket.recv()
print(f"Received reply {request} [ {message} ]\n\n")

# -----------------------------------------------------

# Send the request.
request = f"3|{filepath}"
print(f"Sending request: {request} …\n")
socket.send(bytes(request, "ascii"))

#  Get the reply.
message = socket.recv()
print(f"Received reply {request} [ {message} ]\n\n")

# -----------------------------------------------------

# Send the request.
request = f"40|{filepath}"
print(f"Sending request: {request} …\n")
socket.send(bytes(request, "ascii"))

#  Get the reply.
message = socket.recv()
print(f"Received reply {request} [ {message} ]\n\n")

"""
--------------------------------------------------------------------------
    End code citation:
    Author: Unknown
    Website: ZeroMQ
    Article Title: "Get started"
    URL: https://zeromq.org/get-started/?language=python&library=pyzmq#
    Copyright: The ZeroMQ Authors
    Date: 2022
--------------------------------------------------------------------------
"""