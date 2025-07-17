/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ThreadDumpService {
    /**
     * Gets thread dump in json format. Includes very detailed information such as thread name, thread id, blocked time of thread, thread state and many more information are returned.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ThreadDump({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/thread-dump',
            headers: {
                'Accept': accept,
            },
        });
    }
}
