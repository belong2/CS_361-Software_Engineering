FROM gcc:4.9

WORKDIR /usr/src/myapp

COPY main.c /usr/src/myapp

RUN gcc -o myapp main.c

CMD ["./myapp"]