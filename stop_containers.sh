#!/usr/bin/env bash

containers=$(docker ps | grep md-bookshelf | awk '{print $1}')
echo "======================================"
echo "Containers shutdown process started..."
echo "$containers"
echo "======================================"
for container in $containers; do
	docker stop $container
done
