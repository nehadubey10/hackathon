import datetime
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from  werkzeug.security import generate_password_hash, check_password_hash
from src.models.user import User
import pandas as pd
from src import jwt
from flask_jwt_extended import JWTManager
from src.common.database import Database
from src.common.util import is_admin

import re

users_blueprint = Blueprint("users", __name__)

@users_blueprint.route("/login", methods=["POST"])
def userlogin():
    print("dfghjk")
    email = request.json["email"]
    password = request.json["password"]
    user_deatils = User.query.filter_by(email=email).first()
    print("fghjk",user_deatils)
    if user_deatils:
        check_password = check_password_hash(user_deatils.password, password)
        print("user_deatils",user_deatils)
        if user_deatils and check_password:
            expires_time = datetime.timedelta(days=1)
            access_token = create_access_token(identity=email, expires_delta=expires_time)
            ret = {'accessToken': access_token, 'userObj': {"email" : email},"auth":"user"}
            return ret
        else:
            return jsonify(message="Invalid Credential"),400
    else:
        return jsonify(message="Invalid Credential"),400
#hackathon

@users_blueprint.route("/create/user", methods=["POST"])
def createuser():
    try:
        data = request.get_json(force=True)
        user_name= data['user_name']  
        office_phone= data['office_phone']   if 'office_phone' in data else ""
        address=data['address']   if 'address' in data else ""
        email=data['email']  
        mobile=data['mobile']  
        password=data['password']    
    
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

        user_check = User.query.filter_by(email=email).first() 
        if not user_check:
            if(re.fullmatch(regex,email)) :
                if ((len(password)>=8 )) and  re.search("[a-z]",password) and re.search("[0-9]",password) and   re.search("[A-Z]",password) and re.search("[$#@]",password):
    
                        db_user = User(user_name=user_name, address=address,
                        office_phone=office_phone,email=email,mobile=mobile,password=generate_password_hash(password))
                        Database.db.session.add(db_user)
                        Database.db.session.commit()   
                        return jsonify(message="User  Created Successfully"),200
                else:
                    return jsonify(message= "Invalid Password, Minimum length 8 character, password must have special character ,Upper case,Lower case and digits"),400
            else:
                return jsonify(message="Invalid Email Formate"),400  
        else:
            return jsonify(message="Email Already Exists"),404
    except Exception as e:
        return jsonify(message=f"Error in creating user = {e}"),400