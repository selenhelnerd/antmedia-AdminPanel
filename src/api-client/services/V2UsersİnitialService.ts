/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2UsersİnitialService {
    /**
     * Creates initial user. This is a one time scenario when initial user creation required and shouldn't be used otherwise. User object is required and can't be null
     * @returns any OK
     * @throws ApiError
     */
    public static postV2Usersİnitial({
        contentType,
        accept,
        requestBody,
    }: {
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/users/initial',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
