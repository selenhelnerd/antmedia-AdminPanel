/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApplicationsAppnameResetService {
    /**
     * Resets the viewer counts and broadcasts statuses in the db. This can be used after server crashes to recover db. It's not intended to use to ignore the crash.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2ApplicationsReset({
        appname,
        accept,
        requestBody,
    }: {
        appname: string,
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/applications/{appname}/reset',
            path: {
                'appname': appname,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
