/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2UsersAuthenticateService {
    /**
     * Authenticates user with given username and password. Requires user object to authenticate.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2UsersAuthenticate({
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
            url: '/v2/users/authenticate',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
