go build -ldflags="-s -w" -installsuffix cgo -o go_server .
docker build -t guygubaby/go-server-practice:latest .