// ملف JavaScript الأساسي للتطبيق

// دالة للتحقق من تسجيل الدخول
function checkAuth() {
    if (!localStorage.getItem('loggedIn') && !window.location.href.includes('login.html') && !window.location.href.includes('index.html')) {
        window.location.href = 'login.html';
    }
}

// دالة لعرض التنبيهات
function showAlert(message, type = 'info') {
    const alertTypes = {
        'success': 'نجاح',
        'warning': 'تحذير', 
        'error': 'خطأ',
        'info': 'معلومة'
    };
    
    console.log(`[${alertTypes[type]}] ${message}`);
}

// دالة لتنسيق التاريخ
function formatDate(date) {
    return new Date(date).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل النظام المدرسي - النموذج الأولي');
    
    // إضافة تأثيرات للبطاقات
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});