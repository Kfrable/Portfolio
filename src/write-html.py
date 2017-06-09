# message = 'hello world'
# print(message)

f = open('helloworld.html','w')

message = """<html>
<head></head>
<body><p>Hello World!</p>
<h1>Hello World</h1> 
<h2>Hello</h2>
<h2>how are you<h2>
</body>
</html>"""

f.write(message)
f.close()
filename = 'file:///Users/username/Desktop/programming-historian/' + 'helloworld.html'
webbrowser.open_new_tab(filename)
