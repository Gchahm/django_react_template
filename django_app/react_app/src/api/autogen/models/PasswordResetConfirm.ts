/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Serializer for confirming a password reset attempt.
 * @export
 * @interface PasswordResetConfirm
 */
export interface PasswordResetConfirm {
    /**
     * 
     * @type {string}
     * @memberof PasswordResetConfirm
     */
    newPassword1: string;
    /**
     * 
     * @type {string}
     * @memberof PasswordResetConfirm
     */
    newPassword2: string;
    /**
     * 
     * @type {string}
     * @memberof PasswordResetConfirm
     */
    uid: string;
    /**
     * 
     * @type {string}
     * @memberof PasswordResetConfirm
     */
    token: string;
}

/**
 * Check if a given object implements the PasswordResetConfirm interface.
 */
export function instanceOfPasswordResetConfirm(value: object): value is PasswordResetConfirm {
    if (!('newPassword1' in value) || value['newPassword1'] === undefined) return false;
    if (!('newPassword2' in value) || value['newPassword2'] === undefined) return false;
    if (!('uid' in value) || value['uid'] === undefined) return false;
    if (!('token' in value) || value['token'] === undefined) return false;
    return true;
}

export function PasswordResetConfirmFromJSON(json: any): PasswordResetConfirm {
    return PasswordResetConfirmFromJSONTyped(json, false);
}

export function PasswordResetConfirmFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordResetConfirm {
    if (json == null) {
        return json;
    }
    return {
        
        'newPassword1': json['new_password1'],
        'newPassword2': json['new_password2'],
        'uid': json['uid'],
        'token': json['token'],
    };
}

export function PasswordResetConfirmToJSON(json: any): PasswordResetConfirm {
    return PasswordResetConfirmToJSONTyped(json, false);
}

export function PasswordResetConfirmToJSONTyped(value?: PasswordResetConfirm | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'new_password1': value['newPassword1'],
        'new_password2': value['newPassword2'],
        'uid': value['uid'],
        'token': value['token'],
    };
}

export const PasswordResetConfirmPropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
    newPassword1: {
        maxLength: 128,
    },
    newPassword2: {
        maxLength: 128,
    },
}
