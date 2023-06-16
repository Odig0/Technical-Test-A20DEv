# Technical-test-A20Dev
Technical Test for A2O Dev  in Django and Angular
To run this project: 
Clone the repository: Use the git clone command followed by the repository URL to clone the repository. 
                        git clone https://github.com/Odig0/Technical-test-A20Dev
                        
go to the folder cd: repository-name
Please make sure you have Node, Angular, Python and Django installed.
      currenty using: 
      Python 3.10.7 
      Angular CLI: 16.0.1
      Node: 18.13.0
      Django: 4.2.2
Install Angular dependencies:
                            npm install
(make sure u have virtualenv activate) 
Windows or create one using: 
                          python -m venv venv 
then activate : 
                          "venv\Scripts\activate"       
                          
Install Django dependencies  navigate to the Django project's directory within the repository (where the manage.py file is located) 
and run the following command to install the dependencies specified in the project's requirements.txt file 
                            pip install -r requirements.txt
Start the Django development server:
                            python manage.py runserver
To start the Angular development server:
                            ng serve
Now you can use the application the problem1 being Chess problem:
You have a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an n x n chessboard. The chess board's rows are numbered from 1 to n, going from bottom to top. Its columns are numbered from 1 to n, going from left to right. Each square is referenced by a tuple, (r, c) , describing the row, r, and column, c, where the square is located.
The queen is standing at position (rq, cq). In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from (4, 4):
- n: an integer, the number of rows and columns in the board
- k: an integer, the number of obstacles on the board
- rq: integer, the row number of the queen's position
- cq: integer, the column number of the queen's position
- obstacles: a two dimensional array of integers where each element is an array of  integers, the row and column of an obstacle
Problem2L String Value:
Jane loves strings more than anything. She has a string t with her, and value of string s over function f can be calculated as given below:

f(s) = |s| x Number of times s occurs in t

