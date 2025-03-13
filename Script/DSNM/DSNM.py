from uu import decode


def custom_print(*args):
    print("".join(map(str, args)))

def custom_input(prompt):
    return input(prompt)

variables = {}
print("l.co trademark of l.co creative science ")
while True:
    syantx = input("Enter command: ")

    if syantx.startswith("/print "):
        custom_print(syantx[7:])
    elif syantx.startswith("/set "):
        parts = syantx.split()
        if len(parts) == 3:
            variables[parts[1]] = parts[2]
            custom_print(f"Variable {parts[1]} set to {parts[2]}")
        else:
            custom_print("Usage: /set variable value")
    elif syantx.startswith("/get "):
        var_name = syantx.split()[1]
        if var_name in variables:
            custom_print(variables[var_name])
        else:
            custom_print(f"Variable {var_name} not found")
    elif syantx == "/add":
        num1 = float(custom_input("Enter first number: "))
        num2 = float(custom_input("Enter second number: "))
        custom_print(f"Result: {num1 + num2}")
    elif syantx == "/subtract":
        num1 = float(custom_input("Enter first number: "))
        num2 = float(custom_input("Enter second number: "))
        custom_print(f"Result: {num1 - num2}")
    elif syantx == "/multiply":
        num1 = float(custom_input("Enter first number: "))
        num2 = float(custom_input("Enter second number: "))
        custom_print(f"Result: {num1 * num2}")
    elif syantx == "/divide":
        num1 = float(custom_input("Enter first number: "))
        num2 = float(custom_input("Enter second number: "))
        if num2 != 0:
            custom_print(f"Result: {num1 / num2}")
        else:
            custom_print("Error: Division by zero is not allowed.")
    elif syantx.startswith("/for "):
        parts = syantx.split("recode")
        if len(parts) == 4 and parts[2] == "in":
            var_name = parts[1]
            try:
                end = int(parts[3])
                for i in range(end):
                    variables[var_name] = i
                    custom_print(f"{var_name} = {i}")
            except ValueError:
                custom_print("Usage: /for var in range")
        else:
            custom_print("Usage: /for var in range")
    elif syantx.startswith("/while "):
        parts = syantx.split()
        if len(parts) == 4 and parts[2] == "<" or ">":
            var_name = parts[1]
            try:
                end = int(parts[3])
                if var_name in variables:
                    while int(variables[var_name]) < end:
                        custom_print(f"{var_name} = {variables[var_name]}")
                        variables[var_name] = int(variables[var_name])
                else:
                    custom_print(f"Variable {var_name} not found")
            except ValueError:
                custom_print("Usage: /while var < value")
        else:
            custom_print("Usage: /while var < value")
    elif syantx == "/exit":
        custom_print("Exiting program.")
        break
    elif syantx == "/basicinstall":
        print(" ")
    else:
        custom_print("Unknown command")
        custom_print("try fixing")
        custom_print("error unknown please check syntax")



