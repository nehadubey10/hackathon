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
import pickle
import re
import pandas as pd
model_blueprint = Blueprint("model", __name__)

model = pickle.load(open('model1.pkl','rb'))

# 'qty', 'total_price', 'freight_price', 'product_name_lenght',
#        'product_description_lenght', 'product_photos_qty', 'product_weight_g',
#        'product_score', 'customers', 'weekday', 'weekend', 'holiday', 'month',
#        'year', 's', 'volume', 'comp_1', 'ps1', 'fp1', 'comp_2', 'ps2', 'fp2',
#        'comp_3', 'ps3', 'fp3', 'bed_bath_table', 'computers_accessories',
#        'consoles_games', 'cool_stuff', 'furniture_decor', 'garden_tools',
#        'health_beauty', 'perfumery', 'watches_gifts'


cat = pd.read_excel("Category.xlsx")    

@model_blueprint.route("/predict", methods=["POST"])
def userlogin():
    print("dfghjk")
    try:
        freight_price = request.json["freight_price"]
        product_name_lenght = request.json["product_name_lenght"]
        product_description_lenght = request.json['product_description_lenght']
        product_photos_qty = request.json["product_photos_qty"]
        product_weight_g = request.json["product_weight_g"]
        product_score = request.json["product_score"]
        customers = request.json["customers"]
        weekday = request.json["weekday"]
        weekend = request.json["weekend"]
        holiday = request.json["holiday"]
        month = request.json["month"]
        year = request.json["year"]
        s = request.json["s"]
        volume = request.json["volume"]
        comp_1 = request.json["comp_1"]
        ps1 = request.json["ps1"]
        fp1 = request.json["fp1"]
        comp_2 = request.json["comp_2"]
        ps2 = request.json["ps2"]
        fp2 = request.json["fp2"]
        comp_3 = request.json["comp_3"]
        ps3 = request.json["ps3"]
        fp3 = request.json["fp3"]
        bed_bath_table = request.json["bed_bath_table"]
        computers_accessories = request.json["computers_accessories"]
        consoles_games = request.json["consoles_games"]
        cool_stuff = request.json["cool_stuff"]
        furniture_decor = request.json["furniture_decor"]
        garden_tools = request.json["garden_tools"]
        health_beauty = request.json["health_beauty"]
        # garden_tools = request.json["garden_tools"]
        perfumery = request.json["perfumery"]
        watches_gifts = request.json["watches_gifts"]  
        # print("dfghj")
        
        
    
        if bed_bath_table=="1":
            min_price=cat['Min'][cat['Category']=='bed_bath_table']
            max_price=cat['Max'][cat['Category']=='bed_bath_table']
        elif computers_accessories=="1":
            min_price=cat['Min'][cat['Category']=='computers_accessories']
            max_price=cat['Max'][cat['Category']=='computers_accessories']
        elif consoles_games=="1":
            min_price=cat['Min'][cat['Category']=='consoles_games']
            max_price=cat['Max'][cat['Category']=='consoles_games']
        elif cool_stuff=="1":
            min_price=cat['Min'][cat['Category']=='cool_stuff']
            max_price=cat['Max'][cat['Category']=='cool_stuff']
        elif furniture_decor=="1":
            min_price=cat['Min'][cat['Category']=='furniture_decor']
            max_price=cat['Max'][cat['Category']=='furniture_decor']
        elif garden_tools=="1":
            min_price=cat['Min'][cat['Category']=='garden_tools']
            max_price=cat['Max'][cat['Category']=='garden_tools']
        elif health_beauty=="1":
            min_price=cat['Min'][cat['Category']=='health_beauty']
            max_price=cat['Max'][cat['Category']=='health_beauty']
        elif perfumery=="1":
            min_price=cat['Min'][cat['Category']=='perfumery']
            max_price=cat['Max'][cat['Category']=='perfumery']
        elif watches_gifts=="1":
            min_price=cat['Min'][cat['Category']=='watches_gift']
            max_price=cat['Max'][cat['Category']=='watches_gift']
        print("fghjk")
        list1=[]
        for i in range(int(min_price), int(max_price), 1):
            list1.append(i)
        
        final_result = []
        for i in list1:
            df1= {"freight_price":[freight_price],"unit_price": i,"product_name_lenght":[product_name_lenght],"product_description_lenght":[product_description_lenght],"product_photos_qty":[product_photos_qty],
            "product_weight_g":[product_weight_g],"product_score":[product_score], "customers":[customers],  "weekday":[weekday],  "weekend":[weekend], "holiday":[holiday], 
            "month":[month],  "year":[year],  "s":[s],"volume":[volume],"comp_1":[comp_1],"ps1":[ps1],"fp1":[fp1],"comp_2":[comp_2],"ps2":[ps2],"fp2":[fp2],"comp_3":[comp_3],"ps3":[ps3],
            "fp3":[fp3],"bed_bath_table":[bed_bath_table],"computers_accessories":[computers_accessories],"consoles_games":[consoles_games],"cool_stuff":[cool_stuff],"furniture_decor":[furniture_decor],
            "garden_tools":[garden_tools],"health_beauty":[health_beauty],"perfumery":[perfumery],"watches_gifts":[watches_gifts]
            }
            print("sedrftgyhu",df1)
            df = pd.DataFrame(df1)
            result = model.predict(df)[0]
            final_result.append(result)
        
        print("4567")
        result_lib={"qty":final_result, "unit_price":list1}
        df_result = pd.DataFrame(result_lib)
        
        print("fghj")
        list2=[]
        for i in range(0,len(df_result)):
            print("dfghj")
            list2.append(df_result['qty'][i]*df_result['unit_price'][i])
        print("ertyu")
        df_result['total_price']=list2
        print("fghj")
        max_total_price= df_result['total_price'].max()
        print("fghjk",df_result)
        optimized_price=df_result['unit_price'][df_result['total_price']==max_total_price]
        print("optimized_price",optimized_price)
        print("optimized_price")
        return jsonify(message=str(optimized_price.values)),200
    except Exception as e:
        return jsonify(message=f'Error {e}')
#hackathon0