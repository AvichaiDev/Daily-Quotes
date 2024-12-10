<?php
$file = 'counter.txt';

// בדיקה אם הקובץ קיים
if (!file_exists($file)) {
    file_put_contents($file, 0);
}

// קריאת המספר הנוכחי
$count = (int)file_get_contents($file);

// הגדלת המספר ב-1
$count++;

// שמירת המספר המעודכן
file_put_contents($file, $count);

// הצגת מספר הצפיות
echo "מספר הצפיות באתר: $count";
?>


