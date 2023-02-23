import pickle
from flask import Flask,render_template,request,jsonify
import json
import numpy as np
from flask_sqlalchemy import SQLAlchemy
import sqlite3

app=Flask(__name__)
model=pickle.load(open('Crop_Prediction.pkl','rb'))
model1=pickle.load(open('Fertilizer.pkl','rb'))
@app.route('/')
def index():

    return render_template('index.html')
@app.route('/predict',methods = ['GET','POST'])
def predict():
    body=request.get_json()
    print(body)
    a=float(body['a'])
    b=float(body['b'])
    c=float(body['c'])
    d=float(body['d'])
    e=float(body['e'])
    f=float(body['f'])
    g=float(body['g'])


    testdata=np.array([[a,b,c,d,e,f,g]])
    prediction=model.predict(testdata)
    output=prediction[0]
    print(output)
    name = output
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM my_table WHERE name=?',(name,))
    rows = cursor.fetchall()
    conn.close()
    data = []
    for row in rows:
        data.append({'name': row[0], 'description': row[1]})
    return jsonify(data)


@app.route('/predictf',methods = ['GET','POST'])
def predictf():
    body = request.get_json()
    print(body)
    a = float(body['a'])
    b = float(body['b'])
    c = float(body['c'])
    d = float(body['d'])
    e = float(body['e'])
    f = float(body['f'])
    g = float(body['g'])
    h =float(body['h'])
    i =float(body['i'])
    j =float(body['j'])
    k =float(body['k'])
    l =float(body['l'])
    m =float(body['m'])
    n =float(body['n'])
    o =float(body['o'])
    p =float(body['p'])
    q =float(body['q'])
    r =float(body['r'])
    s =float(body['s'])
    t =float(body['t'])
    u =float(body['u'])
    v =float(body['v'])


    testdata = np.array([[a, b, c, d, e, f, g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v]])
    prediction = model1.predict(testdata)
    output = prediction[0]
    print(output)
    name = output
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM my_table WHERE name=?', (name,))
    rows = cursor.fetchall()
    conn.close()
    data = []
    for row in rows:
        data.append({'name': row[0], 'description': row[1]})
    return jsonify(data)


if __name__=='main':
    app.run(debug=True)