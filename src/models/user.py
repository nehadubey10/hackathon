from sqlalchemy import Column, String, Integer, ForeignKey,Text,Enum,ARRAY,Boolean
from sqlalchemy.exc import InternalError
from sqlalchemy.orm import relationship
from src.common.database import Database
import enum


class User(Database.Base_model):
    __tablename__ = "users"
    user_name=Column(String)
    address=Column(Text)
    office_phone=Column(String)
    email=Column(String,unique=True,nullable=False)
    mobile=Column(String)
    password=Column(String)
    
