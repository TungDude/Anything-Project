from app import create_app

app = create_app('instance.config.DevelopmentConfig')

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)