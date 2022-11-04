const fs = require('fs');
const uploadsConfig = require('../configs/uploads');
const path = require('path');

class DiskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadsConfig.TMP_FOLDER, file),
            path.resolve(uploadsConfig.UPLOADS_FOLDER, file)
        );

        return file;
    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadsConfig.UPLOADS_FOLDER, file);

        try {
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);

        return;
    }
}

module.exports = DiskStorage;