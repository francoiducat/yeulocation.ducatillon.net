#!bin/bash

printf "\033[0;32mSetting up environment variable\033[0m\n"
export GMAPS_APIKEY="123"
export GMAPS_ID="456"
printf "\033[0;32mRunning Hugo serve \033[0m\n"
hugo server

