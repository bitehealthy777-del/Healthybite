from flask import Flask, send_from_directory, request

app = Flask(__name__, static_folder='.')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/app/onboard/1')
def onboard():
    goal = request.args.get('goal', 'female_fatloss')  # Default to female_fatloss

    if goal == 'female_muscle':
        plan_title = "Female Muscle-Building Daily Plan "
        plan_rows = """
            <tr>
                <td>Breakfast</td>
                <td>Protein pancakes (oats + egg whites + banana) with almond butter</td>
                <td>
                    Calories: 450 kcal<br>
                    Protein: 28g | Carbs: 42g | Fat: 16g
                </td>
            </tr>
            <tr>
                <td>Lunch</td>
                <td>Turkey meatballs with sweet potato mash and roasted zucchini</td>
                <td>
                    Calories: 600 kcal<br>
                    Protein: 45g | Carbs: 60g | Fat: 14g
                </td>
            </tr>
            <tr>
                <td>Snack</td>
                <td>Greek yogurt smoothie with mixed berries and flaxseeds</td>
                <td>
                    Calories: 300 kcal<br>
                    Protein: 25g | Carbs: 32g | Fat: 8g
                </td>
            </tr>
            <tr>
                <td>Dinner</td>
                <td>Grilled cod with brown rice and steamed broccoli</td>
                <td>
                    Calories: 550 kcal<br>
                    Protein: 40g | Carbs: 50g | Fat: 18g
                </td>
            </tr>
        """
    elif goal == 'female_toneup':
        plan_title = "Female Tone-Up / Maintenance Daily Plan "
        plan_rows = """
            <tr>
                <td>Breakfast</td>
                <td>Chia pudding with almond milk, raspberries, and chopped walnuts</td>
                <td>
                    Calories: 380 kcal<br>
                    Protein: 18g | Carbs: 38g | Fat: 14g
                </td>
            </tr>
            <tr>
                <td>Lunch</td>
                <td>Grilled tofu salad with quinoa, cucumber, and roasted red peppers</td>
                <td>
                    Calories: 480 kcal<br>
                    Protein: 35g | Carbs: 36g | Fat: 16g
                </td>
            </tr>
            <tr>
                <td>Snack</td>
                <td>Edamame pods with a pinch of sea salt</td>
                <td>
                    Calories: 180 kcal<br>
                    Protein: 14g | Carbs: 12g | Fat: 6g
                </td>
            </tr>
            <tr>
                <td>Dinner</td>
                <td>Oven-roasted chicken thigh with cauliflower rice and sautéed kale</td>
                <td>
                    Calories: 470 kcal<br>
                    Protein: 36g | Carbs: 30g | Fat: 16g
                </td>
            </tr>
        """
    else:
        plan_title = "Female Fat-Loss Daily Plan "
        plan_rows = """
            <tr>
                <td>Breakfast</td>
                <td>Cottage cheese with sliced kiwi and pumpkin seeds</td>
                <td>
                    Calories: 300 kcal<br>
                    Protein: 16g | Carbs: 32g | Fat: 7g
                </td>
            </tr>
            <tr>
                <td>Lunch</td>
                <td>Grilled shrimp with arugula, cherry tomatoes, and lemon vinaigrette</td>
                <td>
                    Calories: 450 kcal<br>
                    Protein: 35g | Carbs: 28g | Fat: 18g
                </td>
            </tr>
            <tr>
                <td>Snack</td>
                <td>Carrot sticks with hummus</td>
                <td>
                    Calories: 180 kcal<br>
                    Protein: 5g | Carbs: 20g | Fat: 10g
                </td>
            </tr>
            <tr>
                <td>Dinner</td>
                <td>Baked tempeh with sautéed spinach and bell peppers</td>
                <td>
                    Calories: 400 kcal<br>
                    Protein: 25g | Carbs: 36g | Fat: 15g
                </td>
            </tr>
        """

    return f"""
    <html>
    <head>
        <title>{plan_title} - Healthybite</title>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 40px; background: #f9f9f9; }}
            h1 {{ color: #2d8659; }}
            table {{ border-collapse: collapse; width: 80%; margin: 20px 0; }}
            th, td {{ border: 1px solid #ccc; padding: 10px; text-align: left; vertical-align: middle; }}
            th {{ background: #e6ffe6; }}
        </style>
    </head>
    <body>
        <h1>{plan_title}</h1>
        <table>
            <tr>
                <th>Meal</th>
                <th>Menu</th>
                <th>Nutrition</th>
            </tr>
            {plan_rows}
        </table>
        <p style="color:#888;">Drink plenty of water throughout the day. Adjust portions as needed.</p>
        <a href="/" style="color:#2d8659;">Back to Home</a>
    </body>
    </html>
    """

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(debug=True, port=5000)