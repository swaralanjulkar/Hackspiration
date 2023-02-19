import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE my_table
                  (name TEXT PRIMARY KEY,
                   image TEXT,
                   description TEXT)''')
conn.commit()
conn.close()
