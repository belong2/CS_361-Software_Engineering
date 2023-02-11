Microservice Communication Contract:

This microservice is set up to communicate via tcp//127.0.0.1:2045
This can be changed via the configuration of the package ZeroMQ in the server.py file.

More documentation for ZeroMQ python library can be found at:
https://zeromq.org/get-started/?language=python&library=pyzmq#


*************************************** Requesting Information ***************************************
The program expects a byte string to be sent in the format bytes("<int>|<filepath>"). <int> will
be the integer ID of the item that the user wishes to search in the .csv file. <filepath> should
be the absolute filepath of the .csv file that the user wishes to search. The program does not
make any checks regarding the files extension; however, .csv format is checked. If the filepath
points to a file that does not exist or the file pointed to is not in the correct format, the
program will return an error message to the user program.

The expected encoding is ASCII; however, this can also be configured by modifying the source code.


*************************************** Receiving Information ***************************************
The user program should expect either an error message or the information corresponding to a integer
id from the .csv file in question. Error messgages are of the format "Error: <error description>.
A successful search will yield a response formatted as "<info_str_1>|<info_str_2>".

All received messages should be decoded as ASCII.