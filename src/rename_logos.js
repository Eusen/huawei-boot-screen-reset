const $fs = require('fs');
const $path = require('path');

const logoPath = 'C:/Program Files/Huawei/PCManager/res/drawable/logo';
const previewPath = $path.join(logoPath, 'PreView');

const fileMap = {
    ho: 'H2ho',
    V_6: 'H2_1',
    V_9: 'H2_2',
    V_11: 'H2_3',
    V_13: 'H2_4',
    V_12: 'H2_5',
    z11: 'H2_6',
    V_10: 'H2_7',
    V_16: 'H2_8',
    z10: 'H2_9',
    V_8: 'H2_10',
    z9: 'H2_11',
    V_15: 'H2_12',
    V_7: 'H2_13',
    z8: 'H2_14',
    V_14: 'H2_15',
};

(function (backup) {
    const exts = ['bmp', 'png'];
    [logoPath, previewPath].forEach((targetPath, index) => {
        const ext = exts[index];
        Object.keys(fileMap).forEach(oldBmp => {
            if (backup) {
                const oldBmpPath = $path.join(targetPath, `${oldBmp}.${ext}`);
                const oldBmpBackupPath = $path.join(targetPath, `${oldBmp}_backup.${ext}`);
                // remove new file
                $fs.unlinkSync(oldBmpPath);
                // rename *_backup.bmp to *.bmp
                $fs.renameSync(oldBmpBackupPath, oldBmpPath);
            } else {
                const newBmp = fileMap[oldBmp];
                const newBmpPath = $path.join(targetPath, `${newBmp}.${ext}`);

                const oldBmpPath = $path.join(targetPath, `${oldBmp}.${ext}`);
                const oldBmpBackupPath = $path.join(targetPath, `${oldBmp}_backup.${ext}`);
                // backup
                $fs.renameSync(oldBmpPath, oldBmpBackupPath);
                // copy new file with old name
                $fs.copyFileSync(newBmpPath, oldBmpPath);
            }
        });
    });
})(process.argv[2] === 'backup');