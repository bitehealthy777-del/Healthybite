const plans = {
  female_diabetes: { 
    title: "Female Diabetes-Friendly Daily Plan", 
    meals: [
      { meal: "Breakfast", menu: "Greek yogurt with chia seeds, berries, and a sprinkle of cinnamon", nutrition: "350 kcal | Protein: 20g | Carbs: 30g | Fat: 10g" },
      { meal: "Lunch", menu: "Grilled salmon with steamed broccoli and quinoa", nutrition: "500 kcal | Protein: 40g | Carbs: 35g | Fat: 18g" },
      { meal: "Snack", menu: "Celery sticks with almond butter", nutrition: "180 kcal | Protein: 5g | Carbs: 8g | Fat: 15g" },
      { meal: "Dinner", menu: "Baked chicken breast with roasted vegetables and a small portion of brown rice", nutrition: "450 kcal | Protein: 35g | Carbs: 30g | Fat: 12g" }
    ]
  },
  female_heart: { 
    title: "Female Heart-Friendly Daily Plan", 
    meals: [
      { meal: "Breakfast", menu: "Oatmeal topped with walnuts, flaxseeds, and fresh blueberries", nutrition: "400 kcal | Protein: 12g | Carbs: 45g | Fat: 16g" },
      { meal: "Lunch", menu: "Grilled turkey or tofu salad with mixed greens, avocado, and olive oil vinaigrette", nutrition: "450 kcal | Protein: 35g | Carbs: 25g | Fat: 20g" },
      { meal: "Snack", menu: "Carrot and cucumber sticks with hummus", nutrition: "180 kcal | Protein: 5g | Carbs: 15g | Fat: 10g" },
      { meal: "Dinner", menu: "Baked cod or lentil stew with roasted vegetables and a side of quinoa", nutrition: "500 kcal | Protein: 35g | Carbs: 40g | Fat: 15g" }
    ]
  },
  female_toneup: { 
    title: "Female Tone-Up / Maintenance Daily Plan", 
    meals: [
      { meal: "Breakfast", menu: "Chia pudding with raspberries and walnuts", nutrition: "380 kcal | Protein: 18g | Carbs: 38g | Fat: 14g" },
      { meal: "Lunch", menu: "Grilled tofu salad with quinoa and peppers", nutrition: "480 kcal | Protein: 35g | Carbs: 36g | Fat: 16g" },
      { meal: "Snack", menu: "Edamame pods with sea salt", nutrition: "180 kcal | Protein: 14g | Carbs: 12g | Fat: 6g" },
      { meal: "Dinner", menu: "Oven-roasted chicken thigh with cauliflower rice and kale", nutrition: "470 kcal | Protein: 36g | Carbs: 30g | Fat: 16g" }
    ]
  },
  male_diabetes: { 
    title: "Male Diabetes-Friendly Daily Plan", 
    meals: [
      { meal: "Breakfast", menu: "Greek yogurt with chia seeds, berries, and a sprinkle of cinnamon", nutrition: "400 kcal | Protein: 25g | Carbs: 35g | Fat: 12g" },
      { meal: "Lunch", menu: "Grilled salmon with steamed broccoli and quinoa", nutrition: "550 kcal | Protein: 45g | Carbs: 40g | Fat: 20g" },
      { meal: "Snack", menu: "Celery sticks with almond butter", nutrition: "200 kcal | Protein: 5g | Carbs: 10g | Fat: 16g" },
      { meal: "Dinner", menu: "Baked chicken breast with roasted vegetables and a small portion of brown rice", nutrition: "500 kcal | Protein: 40g | Carbs: 35g | Fat: 15g" }
    ]
  },
  male_heart: { 
    title: "Male Heart-Friendly Daily Plan", 
    meals: [
      { meal: "Breakfast", menu: "Oatmeal topped with walnuts, flaxseeds, and fresh blueberries", nutrition: "450 kcal | Protein: 15g | Carbs: 50g | Fat: 18g" },
      { meal: "Lunch", menu: "Grilled turkey or tofu salad with mixed greens, avocado, and olive oil vinaigrette", nutrition: "500 kcal | Protein: 40g | Carbs: 30g | Fat: 22g" },
      { meal: "Snack", menu: "Carrot and cucumber sticks with hummus", nutrition: "200 kcal | Protein: 6g | Carbs: 18g | Fat: 12g" },
      { meal: "Dinner", menu: "Baked cod or lentil stew with roasted vegetables and a side of quinoa", nutrition: "550 kcal | Protein: 40g | Carbs: 45g | Fat: 16g" }
    ]
  },
  male_toneup: { 
    title: "Male Tone-Up / Maintenance Daily Plan", 
    meals: [
      { meal: "Breakfast", menu: "Overnight oats with almonds and blueberries", nutrition: "400 kcal | Protein: 22g | Carbs: 45g | Fat: 12g" },
      { meal: "Lunch", menu: "Grilled turkey wrap with veggies", nutrition: "500 kcal | Protein: 35g | Carbs: 40g | Fat: 15g" },
      { meal: "Snack", menu: "Boiled eggs with cucumber slices", nutrition: "200 kcal | Protein: 15g | Carbs: 5g | Fat: 10g" },
      { meal: "Dinner", menu: "Baked cod with roasted cauliflower and carrots", nutrition: "500 kcal | Protein: 40g | Carbs: 35g | Fat: 14g" }
    ]
  },
  healthy_recipes: {
    title: "Healthy Recipes Collection",
    meals: [
      {
        meal: "Quinoa Bowl",
        menu: `
          <img src="images/quinoa.jpeg" class="recipe-img">
          <strong>Ingredients:</strong>
          <ul>
            <li>½ cup uncooked quinoa</li>
            <li>1 cup almond milk</li>
            <li>1–2 cinnamon sticks</li>
            <li>½ teaspoon vanilla extract</li>
            <li>Sea salt, to taste</li>
            <li>Additional spices: cinnamon, nutmeg, ginger (optional)</li>
            <li>Toppings: toasted almonds, toasted coconut flakes, fresh peaches, raspberries, almond milk (optional), maple syrup (optional)</li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>Rinse the quinoa and place it in a small saucepan. Add almond milk, cinnamon sticks, vanilla, and a pinch of salt.</li>
            <li>Bring to a high simmer, cover, and reduce heat. Gently simmer for 15 minutes.</li>
            <li>Remove from heat and let sit for 5 minutes until quinoa is cooked and liquid absorbed. Taste and adjust spices.</li>
            <li>Scoop quinoa into bowls and top with almonds, coconut, peaches, raspberries. Add warm almond milk or maple syrup if desired.</li>
          </ol>
        `,
        nutrition: "Approx. 350 kcal | Protein: 12g | Carbs: 50g | Fat: 10g"
      },
      {
        meal: "Vegetable Upma",
        menu: `
          <img src="images/upma.jpeg" class="recipe-img">
          <strong>Ingredients:</strong>
          <ul>
            <li>1 cup semolina (rava/sooji)</li>
            <li>2 cups water</li>
            <li>1 small onion, chopped</li>
            <li>1-2 green chilies, chopped</li>
            <li>1/2 cup chopped vegetables (carrot, beans, peas)</li>
            <li>2 tbsp oil or ghee</li>
            <li>1 tsp mustard seeds</li>
            <li>1 tsp urad dal (optional)</li>
            <li>1 tsp chana dal (optional)</li>
            <li>Few curry leaves</li>
            <li>Salt to taste</li>
            <li>Fresh coriander leaves for garnish</li>
            <li>Lemon juice (optional)</li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>Dry roast the semolina on medium heat until lightly golden. Keep aside.</li>
            <li>Heat oil/ghee in a pan, add mustard seeds, urad dal, chana dal, and curry leaves. Sauté until aromatic.</li>
            <li>Add onions, green chilies, and chopped vegetables. Cook for 2-3 minutes.</li>
            <li>Add water and salt, bring to a boil.</li>
            <li>Slowly add roasted semolina while stirring continuously to avoid lumps.</li>
            <li>Cover and cook on low heat for 3-5 minutes until water is absorbed and upma is fluffy.</li>
            <li>Garnish with fresh coriander and a squeeze of lemon juice. Serve hot.</li>
          </ol>
        `,
        nutrition: "Approx. 300 kcal | Protein: 8g | Carbs: 55g | Fat: 6g"
      },
      {
        meal: "Sprouts Salad",
        menu: `
          <img src="images/sprout salad.jpeg" class="recipe-img">
          <strong>Ingredients:</strong>
          <ul>
            <li>1 cup sprouted moong beans (or mixed sprouts)</li>
            <li>1 small cucumber, chopped</li>
            <li>1 small tomato, chopped</li>
            <li>1 small carrot, grated</li>
            <li>1 small onion, finely chopped</li>
            <li>2 tsp lemon juice</li>
            <li>Salt and pepper to taste</li>
            <li>1 tsp olive oil (optional)</li>
            <li>Fresh coriander leaves, chopped</li>
            <li>Optional: chopped green chili or a pinch of chaat masala for flavor</li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>Rinse the sprouts thoroughly and drain excess water.</li>
            <li>In a large bowl, combine sprouts, cucumber, tomato, carrot, and onion.</li>
            <li>Add lemon juice, olive oil (if using), salt, and pepper. Mix well.</li>
            <li>Garnish with fresh coriander leaves and optional spices.</li>
            <li>Serve fresh as a light and protein-rich salad.</li>
          </ol>
        `,
        nutrition: "Approx. 200 kcal | Protein: 14g | Carbs: 25g | Fat: 5g"
      },
      {
        meal: "Protein Power Choco Bar",
        menu: `
          <img src="images/protein_choco_bar.jpeg" class="recipe-img">
          <strong>Ingredients:</strong>
          <ul>
            <li>1 cup rolled oats</li>
            <li>1/2 cup protein powder (chocolate flavor recommended)</li>
            <li>1/4 cup cocoa powder</li>
            <li>1/2 cup peanut butter (or almond butter)</li>
            <li>1/4 cup honey or maple syrup</li>
            <li>1/4 cup chopped nuts or dark chocolate chips (optional)</li>
            <li>1 tsp vanilla extract</li>
            <li>Pinch of salt</li>
          </ul>
          <strong>Instructions:</strong>
          <ol>
            <li>In a large bowl, mix oats, protein powder, cocoa powder, and salt.</li>
            <li>Add peanut butter, honey, and vanilla extract. Mix until a thick dough forms. Add nuts or chocolate chips if desired.</li>
            <li>Line a small baking dish with parchment paper and press the mixture evenly into it.</li>
            <li>Refrigerate for at least 1 hour until firm.</li>
            <li>Remove from dish and cut into bars. Store in an airtight container in the fridge.</li>
            <li>Enjoy as a protein-rich snack or post-workout treat!</li>
          </ol>
        `,
        nutrition: "Approx. 250 kcal | Protein: 15g | Carbs: 30g | Fat: 10g"
      }
    ]
  }
};

// Step 1: Gender Selection
document.getElementById('genderForm').addEventListener('submit', function(e){
  e.preventDefault();
  const gender = document.getElementById('gender').value;
  if(!gender) return;

  const goalSelect = document.getElementById('goal');
  goalSelect.innerHTML = '';

  const goals = gender === 'female' ? 
    [['Diabetes Friendly','female_diabetes'], ['Heart Friendly','female_heart'], ['Tone-Up','female_toneup'], ['Healthy Recipes','healthy_recipes']] :
    [['Diabetes Friendly','male_diabetes'], ['Heart Friendly','male_heart'], ['Tone-Up','male_toneup'], ['Healthy Recipes','healthy_recipes']];

  goals.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g[1];
    opt.textContent = g[0];
    goalSelect.appendChild(opt);
  });

  document.getElementById('gender-section').classList.add('hidden');
  document.getElementById('goal-section').classList.remove('hidden');
});

// Step 2: Goal Selection
document.getElementById('goalForm').addEventListener('submit', function(e){
  e.preventDefault();
  const selectedPlan = document.getElementById('goal').value;
  const plan = plans[selectedPlan];
  if(!plan) return;

  const resultDiv = document.getElementById('result');
  let html = `<h2>${plan.title}</h2><table><tr><th>Meal / Recipe</th><th>Menu / Preparation</th><th>Nutrition</th></tr>`;
  plan.meals.forEach(m => {
    html += `<tr><td>${m.meal}</td><td>${m.menu}</td><td>${m.nutrition}</td></tr>`;
  });
  html += `</table><p class='note'>💧 Drink plenty of water throughout the day. Adjust portions as needed.</p>`;

  resultDiv.innerHTML = html;

  // Animate table rows
  const rows = resultDiv.querySelectorAll('tr');
  rows.forEach((row, i) => { setTimeout(() => row.classList.add('show-row'), i * 150); });

  // Add back button
  const backBtn = document.createElement('button');
  backBtn.id = "backBtn";
  backBtn.textContent = "Back";
  resultDiv.appendChild(backBtn);

  resultDiv.classList.add('show');
  resultDiv.scrollIntoView({behavior:'smooth'});

  backBtn.addEventListener('click', function(){
    document.getElementById('gender-section').classList.remove('hidden');
    document.getElementById('goal-section').classList.add('hidden');
    resultDiv.classList.remove('show');
    resultDiv.innerHTML = "";
    document.getElementById('gender').value = "";
  });
});
