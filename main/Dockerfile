FROM python:3.10-slim
WORKDIR /app
COPY . .
RUN pip install -r main/requirements.txt
EXPOSE 5000
CMD ["python", "main/app.py"]
