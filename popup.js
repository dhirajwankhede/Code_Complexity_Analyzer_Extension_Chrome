document.getElementById("analyzeBtn").addEventListener("click", async () => {
    try {
        const clipboardText = await navigator.clipboard.readText();

        const prompt = `Analyze the following code and provide its time and space complexity:
the format must be like this always and give Time and Space complexity in bold:
Time complexity:
Space complexity:
explanation of time complexity:
explanation of space complexity:

if there is no code to analyze simply return : I'm happy to help! However, I don't see any code provided for analysis. 
Please provide the code you'd like me to analyze.

${clipboardText}`;

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama3-70b-8192",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        const result = data.choices?.[0]?.message?.content || JSON.stringify(data, null, 2);
        document.getElementById("output").textContent = result;

    } catch (err) {
        document.getElementById("output").textContent = `❌ Error: ${err.message}`;
    }
});
