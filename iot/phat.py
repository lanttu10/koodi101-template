#!/usr/bin/python3

import envirophat
import json
import requests
import os
import time

def readSensors():
    sensors = {
        "measureTime":  time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime()),
        "temperature":  envirophat.weather.temperature(),
        "pressure":     envirophat.weather.pressure(),
        "brightness":        envirophat.light.light()
    }

    return sensors 

if __name__ == "__main__":
    url = os.environ["ENDPOINT"]
    print(url)

    sensorsJson = json.dumps(readSensors(), sort_keys=True, indent=2)

    print("------")
    print(sensorsJson)

    headers = {'content-type': 'application/json'}
    requests.post(url, data=sensorsJson, headers=headers)
