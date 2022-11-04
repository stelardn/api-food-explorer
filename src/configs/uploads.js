const { resolve } = require('path');
const crypto = require('crypto');
const multer = require('multer');

const UPLOADS_FOLDER = resolve(__dirname, '..', '..', 'uploads');
const TMP_FOLDER = resolve(UPLOADS_FOLDER, 'tmp');
const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const { meal_id } = request.params;
            const fileName = `${meal_id.padStart(3, '0')}-${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        }
    })
};


module.exports = {
    UPLOADS_FOLDER, TMP_FOLDER, MULTER
};
