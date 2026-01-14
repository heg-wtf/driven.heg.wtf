// Google Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyOBjp76I1szbMfnTKKvdhOp7dq7_wPT2ShyjL0DtAj9UGx3s877BZTLS4MH-qqZqw/exec';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const messageElement = document.getElementById('form-message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (!email) {
            showMessage('이메일 주소를 입력해주세요.', 'error');
            return;
        }

        // 버튼 비활성화
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = '처리 중...';

        try {
            const formData = new URLSearchParams();
            formData.append('email', email);

            const response = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.result === 'success') {
                showMessage('구독이 완료되었습니다! 감사합니다.', 'success');
                emailInput.value = '';
            } else {
                showMessage('오류가 발생했습니다. 다시 시도해주세요.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.', 'error');
        } finally {
            // 버튼 활성화
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    function showMessage(message, type) {
        messageElement.textContent = message;
        messageElement.className = 'form-message ' + type;
        messageElement.style.display = 'block';

        // 3초 후 메시지 숨기기
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 3000);
    }
});
