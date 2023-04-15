
from flask import  jsonify
from flask import request, jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from src.models.user import User
import jwt 
from functools import wraps
import numpy as np
from src.common.database import Database
import pandas as pd

def is_admin(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # jwt is passed in the request header
        if 'Authorization' in request.headers:
            token = request.headers['Authorization']

        if not token:
            return jsonify({'message' : 'Token is missing !!'}),401
        try:
            current_user_email = get_jwt_identity()
            current_user_id = User.query.filter_by(email=current_user_email).first()
            current_user_firm = current_user_id.uploader_identifier_entity

            if not current_user_firm:
                current_user_id=current_user_id
            else:
                return jsonify(message="Not Admin")
        except Exception as e:
            return jsonify({
                'message' : f'Token is invalid !!{e}'
            })
        # returns the current logged in users contex to the routes
        return  f(current_user_id, *args, **kwargs)
  
    return decorated


def user_detail():
    current_user_email = get_jwt_identity()
    current_user_id = User.query.filter_by(email=current_user_email).first()
    if current_user_id:
        return current_user_id.id,current_user_id
    else:
        return jsonify(message="User does not exists")