# syntax=docker/dockerfile:1
FROM python:3.10-alpine
WORKDIR /code 

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY django .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]