#!/bin/bash
# 🌟 DIVINE SERVER MANAGER 🌟
# Manages local development server with grace

PORT=${1:-8001}
PID_FILE=".divine-server.pid"

start_server() {
    echo "✨ Starting Divine Server on port $PORT..."
    
    # Check if already running
    if [ -f "$PID_FILE" ]; then
        OLD_PID=$(cat "$PID_FILE")
        if ps -p $OLD_PID > /dev/null 2>&1; then
            echo "⚠️  Server already running on PID $OLD_PID"
            echo "💡 Use './divine-server.sh stop' first"
            exit 1
        fi
    fi
    
    # Start server in background
    python3 -m http.server $PORT > .divine-server.log 2>&1 &
    SERVER_PID=$!
    echo $SERVER_PID > "$PID_FILE"
    
    echo "🌟 Server started with PID $SERVER_PID"
    echo "🌐 Visit: http://localhost:$PORT"
    echo "📝 Logs: tail -f .divine-server.log"
    echo "🛑 Stop: ./divine-server.sh stop"
}

stop_server() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p $PID > /dev/null 2>&1; then
            echo "🛑 Stopping server (PID $PID)..."
            kill $PID
            rm "$PID_FILE"
            echo "✅ Server stopped"
        else
            echo "⚠️  Server not running"
            rm "$PID_FILE"
        fi
    else
        echo "⚠️  No server PID file found"
    fi
}

status_server() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p $PID > /dev/null 2>&1; then
            echo "✅ Server running on PID $PID"
            echo "🌐 http://localhost:$PORT"
        else
            echo "❌ Server not running (stale PID file)"
        fi
    else
        echo "❌ Server not running"
    fi
}

case "${2:-start}" in
    start)
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        stop_server
        sleep 1
        start_server
        ;;
    status)
        status_server
        ;;
    *)
        echo "Usage: $0 [port] {start|stop|restart|status}"
        echo "Default: $0 8001 start"
        ;;
esac

echo "🐝LOVED🫵🏼" 