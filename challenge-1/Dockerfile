FROM golang:1.16

WORKDIR /go/src
ENV PATH="/go/bin:${PATH}"

ENV CGO_ENABLED=0
COPY . .
ARG TARGETOS
RUN GOOS=${TARGETOS} go build main.go
#RUN GOOS=linux go build main.go

EXPOSE 8000    

CMD ["./main"]