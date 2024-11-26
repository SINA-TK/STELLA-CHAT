// ChatGPT APIキー（提供されたキーを使用）
const API_KEY = "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";

// ボタンのクリックイベントを設定
document.getElementById("testApiButton").addEventListener("click", async function () {
    document.getElementById("result").textContent = "テスト中...";
    
    // ChatGPT APIにリクエストを送信
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`, // APIキーをヘッダーに設定
            },
            body: JSON.stringify({
                model: "text-davinci-003", // 使用するモデル
                prompt: "こんにちは、元気ですか？", // テスト用の簡単な質問
                max_tokens: 50, // 応答の最大トークン数
            }),
        });

        // レスポンスを解析
        const data = await response.json();
        console.log("APIレスポンス:", data);

        // 応答を表示
        if (data.choices && data.choices.length > 0) {
            document.getElementById("result").textContent = `APIキーが有効です！応答内容: ${data.choices[0].text.trim()}`;
        } else {
            document.getElementById("result").textContent = "APIキーは有効ですが、応答が取得できませんでした。";
        }
    } catch (error) {
        console.error("エラー:", error);
        document.getElementById("result").textContent = "APIキーが無効であるか、エラーが発生しました。";
    }
});