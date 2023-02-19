import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()
cursor.execute("INSERT INTO my_table (name, image, description) VALUES (?, ?, ?)", ('Product 1', 'https://example.com/image1.jpg', 'This is a description of product 1'))
cursor.execute("INSERT INTO my_table (name, image, description) VALUES (?, ?, ?)", ('Product 2', 'https://example.com/image2.jpg', 'This is a description of product 2'))
cursor.execute("INSERT INTO my_table (name, image, description) VALUES (?, ?, ?)", ('Product 3', 'https://example.com/image3.jpg', 'This is a description of product 3'))
conn.commit()
conn.close()
