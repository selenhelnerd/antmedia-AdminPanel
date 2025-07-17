/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsWebrtcReceiveLowLevelStatsService {
    /**
     * Get WebRTC Low Level receive stats in general
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsWebrtcReceiveLowLevelStats({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/webrtc-receive-low-level-stats',
            headers: {
                'Accept': accept,
            },
        });
    }
}
