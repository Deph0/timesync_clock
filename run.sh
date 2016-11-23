#!/bin/sh

# get ip, cut out the trailing single space at the end
ip=$(hostname -I | awk '{$1=$1};1')

echo "Onetime-Syncing NTP from NB-SB01..."
# get time from NB-SB01 and apply to yourself 
sudo ntpdate -v 192.168.2.12

echo "Starting timesync clock on $ip:3000 ..."
# run clock timesync (set time of the server instead of useing client time)
sudo screen -dmS timesync node /opt/bitnami/timesync/server.js

echo "Starting Dashkiosk on $ip:9400 ..."
# run dashkiosk (manage the dashboards)
sudo screen -dmS dashkiosk node /opt/bitnami/dashkiosk/dist/server.js --port 9400 --environment production --chromecast.enabled --chromecast.receiver "http://$ip:9400/receiver"

sudo screen -list
