#!/bin/bash

source ./Docker/scripts/env_functions.sh

if [ "$DOCKER_ENV" != "true" ]; then
    export_env_vars
fi

DATABASE_PROVIDER=${DATABASE_PROVIDER:-sqlite}

echo "Generating database for $DATABASE_PROVIDER"
npm run db:generate
if [ $? -ne 0 ]; then
    echo "Prisma generate failed"
    exit 1
else
    echo "Prisma generate succeeded"
fi