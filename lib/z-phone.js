import parsePhoneNumberFromString from 'libphonenumber-js';
import { z } from 'zod';

export const zPhone = z.string().transform((arg, ctx) => {
    const phone = parsePhoneNumberFromString(arg, {
        // set this to use a default country when the phone number omits country code
        defaultCountry: 'US',

        // set false to require that the whole string is exactly a phone number,
        // otherwise, it will search for a phone number anywhere within the string
        extract: false,
    });

    // when it's good
    if (phone && phone.isValid()) {
        return phone.number;
    }

    // when it's not
    ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid phone number',
    });
    return z.NEVER;
});

export default zPhone;