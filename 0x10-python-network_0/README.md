# 0x10. Python - Network #0

This repository contains the solutions to the tasks of the `0x10. Python - Network #0` project in the ALX Higher Level Programming curriculum. The project covers the basics of web scraping and HTTP requests using Python.

## Files

The repository contains the following files:

* `0-body_size.sh`: A Bash script that sends a request to a URL and displays the size of the response body in bytes.
* `1-body.sh`: A Bash script that sends a `GET` request to a URL and displays the response body.
* `2-delete.sh`: A Bash script that sends a `DELETE` request to a URL and displays the response body.
* `3-methods.sh`: A Bash script that sends a request to a URL and displays all the HTTP methods the server will accept.
* `4-header.sh`: A Bash script that sends a `GET` request to a URL with a custom header variable and displays the response body.
* `5-post_params.sh`: A Bash script that sends a `POST` request to a URL with email and subject parameters, and displays the response body.
* `6-peak.py`, `6-peak.txt`: A Python script and a text file that contains a list of unsorted integers. The script finds a peak in the list and returns its value.
* `100-status_code.sh`: A Bash script that sends a request to a URL and displays only the status code of the response.
* `101-post_json.sh`: A Bash script that sends a `POST` request to a URL with a JSON file as the request body, and displays the response body.

## Usage

To use any of the Bash scripts in this repository, simply execute it in your terminal, passing in the required arguments. For example:

```bash
$ ./0-body_size.sh http://example.com
```


To use the Python script in this repository, execute it in your terminal, passing in the text file containing the list of integers as an argument. For example:

```python
$ python3 6-peak.py 6-peak.txt
```

