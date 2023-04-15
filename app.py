import logging
import os
from flask_jwt_extended import jwt_required
import src 
from flask import Flask
from flask_migrate import Migrate
from src.common.database import Database
from dotenv import load_dotenv
from src.common.database import Database
from flask_cors import CORS,cross_origin

load_dotenv('.env')

def create_app():
    app = Flask(__name__)
    CORS(app, support_credentials=True)
    app.config[
        "SQLALCHEMY_DATABASE_URI"] = f'postgresql://{os.environ["DB_USERNAME"]}:{os.environ["DB_PASSWORD"]}@{os.environ["DB_HOST"]}:{os.environ["DB_PORT"]}/{os.environ["DB_NAME"]}'

    app.secret_key = 'd378c67c9c532726b96802eed6ced21389ab414b4eb69c9b'
    Database.initialize(app)
    # s3Helper.initialize()

    Migrate(app,Database.db)
    def register_models(app):
        with app.app_context():
            Database.db.create_all()

    def register_extensions(app):
        Database.db.init_app(app)

    register_extensions(app)
    register_models(app)


    return app

# static_folder='Fintllir-elt-backend/output.xlsx'

app = create_app()
src.jwt.init_app(app)

from src.controllers.user_auth import users_blueprint
from src.controllers.ml import model_blueprint
app.register_blueprint(users_blueprint, url_prefix="/user")
app.register_blueprint(model_blueprint, url_prefix="/model")

@app.route("/")
def hello_world():
    """
    End point for testing
    """
    return "API works"


@app.route("/token/check")
@jwt_required()
def check_token_endpoint():
    return "Token works properly"


# @app.route("/token/check")
# @check_token
# def check_token_endpoint():
#     return "Token works properly"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))

