/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApplicationsLiveStreamsAppnameService {
    /**
     * Returns live streams in the specified application. Retrieves broadcast names and the consumer size.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ApplicationsLiveStreams({
        appname,
        accept,
    }: {
        appname: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/applications/live-streams/{appname}',
            path: {
                'appname': appname,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
