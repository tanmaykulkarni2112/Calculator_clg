# 🧮 Simple JavaScript Calculator

This is a simple, functional **calculator** built using **HTML, CSS, and JavaScript**. It supports basic arithmetic operations (`+`, `-`, `*`, `/`, `%`) and handles **negative numbers** correctly. Hosted on **GitHub Pages**.


## 🌟 Features
✅ Basic arithmetic operations  
✅ Supports **negative numbers** (e.g., `-5 + 3`)  
✅ **Fixes leading "0" issue** (prevents `033 + 2` from happening)  
✅ **"AC" button resets properly**  
✅ `"Back"` button removes last character  
✅ **Hover effects with pointer cursor**  

## 🚀 How to Use
1. Click numbers to input a value.  
2. Click an operator (`+`, `-`, `*`, `/`, `%`).  
3. Press `=` to calculate the result.  
4. Press `"AC"` to reset.  
5. Press `"Back"` to remove the last character.  

## 🛠 Technologies Used
- **HTML** (Structure)
- **CSS** (Styling & Hover Effects)
- **JavaScript** (Functionality & Logic)

## 📌 Live Demo  
[🔗 Click here to use the calculator](https://tanmaykulkarni2112.github.io/Calculator_clg/)  

## 📂 Project Structure
```
/Calculator-Project
│── index.html    # Main HTML file  
│── style.css     # Styling  
│── index.js      # JavaScript Logic  
│── README.md     # Project Documentation  
```

### **🐛 Bug Fixes & Enhancements**
1️⃣ **Fix the "0" Prefix Issue**  
   - When the user presses `AC`, the display should reset to `"0"`, but new numbers shouldn't add extra `0`s at the beginning.  
   - Solution: **Check if `value` is "0" before appending new numbers.**  

2️⃣ **Add `cursor: pointer` on Hover for Buttons**  
   - Update CSS to apply `cursor: pointer` to **all div buttons** (numbers, operations, AC, `=`).  

3️⃣ **Handle Negative Numbers Properly**  
   - Currently, `-` only works as a subtraction operator but doesn't allow negative numbers like `-5 + 3`.  
   - Solution: **Allow `-` at the beginning of input.**  

---


### **🎯 Next Steps**
1. **Fix the code** as explained.  
2. **Update the `README.md`** file (copy the above content and remove the added functionality from Bugs and Enchancements).  
