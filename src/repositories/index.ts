import connection from "../database/db.js";
import { Profile, ProfileBody } from "../types/index.js";

export function getProfileDb(id : string) {
    return connection.query("SELECT * FROM profiles WHERE ($1::text IS NULL) OR id = $1::numeric;", [id]);
}

export function deleteProfileDb(id: string) {
    return connection.query(
        `
    DELETE FROM profiles
    WHERE id = $1;
    `,
        [id]
    );
}

export function updateProfileDb(id: string, profile: ProfileBody) {
    const keys = Object.keys(profile);
    const values = Object.values(profile);
    return connection.query(
        `
    UPDATE profiles
    SET ${keys.map((key, index) => `${key} = $${index + 2}`).join(", ")}
    WHERE id = $1;
    `,
        [id, ...values]
    );
}

export function createProfileDb(profile: Profile) {
    const { name, power, alias, age, sex } = profile;
    return connection.query(
        ` 
    INSERT INTO 
    profiles (name, power, alias, age, sex) 
    VALUES
    ($1, $2, $3, $4, $5);
    `,
        [name, power, alias, age, sex]
    );
}
