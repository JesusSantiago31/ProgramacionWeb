# Instructions

Step 1: Open Terminal in your VS code editor.  

Step 2: Type the command mkdir lab and press Enter

Step 3: Change to the lab directory by typing cd lab and pressing Enter

Step 4: Type the command touch file1.txt and press Enter to create a file named file1.txt

Step 5: Type the command mkdir dir1 and press Enter

Step 6: Type the command mv file1.txt dir1/ and press Enter to move file1.txt to the dir1 directory

Step 7: Type the command touch file2.txt and press Enter to create a file named file2.txt

Step 8: Type the command mkdir -p dir2/dir3 and press Enter. We're using the -p flag to create the parent directories if they do not exist. In this case it will create the dir2 directory and then create the dir3 directory inside of dir2.

Step 9: Type the command mv file2.txt dir2/dir3/ and press Enter to move file2.txt to the dir3 directory

Step 10: Change to the dir2 directory by typing cd dir2

Step 11: Type the command touch file3.txt and press Enter to create a file named file3.txt

Step 12: Type the command mv file3.txt ../ and press Enter to move file3.txt to the lab directory

Step 13: Type the command cd .. and press Enter to navigate back to the lab directory

Step 14: Type the command cd dir1 and press Enter.

Step 15: Type the command ls -l and press Enter. Note how many files and directories are in the dir1 directory.

Step 16: Type the command cd ../dir2 and press Enter.

Step 17: Type the command ls -l and press Enter. Note how many files and directories are in the dir2 directory.

Step 18: Type the command cd dir3 and press Enter.

Step 19: Type the command ls -l and press Enter. Note how many files and directories are in the dir3 directory.

```sh
coder@b2ed0e05c5dd:~/project$ mkdir lab

coder@b2ed0e05c5dd:~/project$ ls
lab  README.md

coder@b2ed0e05c5dd:~/project$ cd lab

coder@b2ed0e05c5dd:~/project/lab$ touch file1.txt

coder@b2ed0e05c5dd:~/project/lab$ mkdir dir1

coder@b2ed0e05c5dd:~/project/lab$ mv file1.txt dir1/

coder@b2ed0e05c5dd:~/project/lab$ touch file2.txt

coder@b2ed0e05c5dd:~/project/lab$ mkdir -p dir2/dir3

coder@b2ed0e05c5dd:~/project/lab$ mv file2.txt dir2/dir3/

coder@b2ed0e05c5dd:~/project/lab$ cd dir2

coder@b2ed0e05c5dd:~/project/lab/dir2$ touch file3.txt

coder@b2ed0e05c5dd:~/project/lab/dir2$ mv file3.txt ../

coder@b2ed0e05c5dd:~/project/lab/dir2$ cd ..

coder@b2ed0e05c5dd:~/project/lab$ cd dir1

coder@b2ed0e05c5dd:~/project/lab/dir1$ ls -l
total 4
-rw-r--r-- 1 coder coder 0 Jan 28 21:18 file1.txt

coder@b2ed0e05c5dd:~/project/lab/dir1$ cd ../dir2

coder@b2ed0e05c5dd:~/project/lab/dir2$ ls -l
total 4
drwxr-xr-x 2 coder coder 6144 Jan 28 21:22 dir3

coder@b2ed0e05c5dd:~/project/lab/dir2$ cd dir3

coder@b2ed0e05c5dd:~/project/lab/dir2/dir3$ ls -l
total 4
-rw-r--r-- 1 coder coder 0 Jan 28 21:21 file2.txt
```