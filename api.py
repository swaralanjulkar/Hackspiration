from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/data')
def get_data():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM my_table')
    rows = cursor.fetchall()
    conn.close()
    data = []
    for row in rows:
        data.append({'name': row[0], 'image': row[1], 'description': row[2]})
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
