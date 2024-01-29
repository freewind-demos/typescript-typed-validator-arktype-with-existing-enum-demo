import { type, narrow } from 'arktype';

// https://stackblitz.com/edit/rzkceh-7yiuzx?file=demo.ts
function EnumType<
    EnumObject extends Record<string, any>,
    EnumType extends EnumObject[keyof EnumObject] = EnumObject[keyof EnumObject]
>(Enum: EnumObject) {
    return narrow("number", (val: number): val is EnumType => {
        return Object.hasOwn(Enum, val)
    })
}

enum Gender {
    Male = 1,
    Female = 2
}

const user = type({
    username: "string|number",
    'gender1?': `${Gender.Male}|${Gender.Female}`,
    'gender2?': EnumType(Gender)
})

console.log(user.definition);

type User = typeof user.infer;

const user1: User = {
    username: 'Freewind',
    gender1: Gender.Male
}
const result = user({ username: true, gender1: 'x' });
console.log(JSON.stringify(result, null, 4));